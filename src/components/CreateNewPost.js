import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';

function CreateNewPost({ open, handleClose }) {

    const [urlValidation, seturlValidation] = useState(true)
    const [nameValidation, setnameValidation] = useState(true)

    const handleUrlChange = (event) => {

        let lenS = event.target.value.length
        if (lenS < 1) {
            seturlValidation({ urlValidation: true })
        }
        else if (event.target.value.length > 0) {
            seturlValidation({ urlValidation: false })
        }
        console.log(urlValidation)
    }
    const handleNameChange = (event) => {
        if (event.target.value.length == 0) {
            setnameValidation({ nameValidation: true })
        }
        else {
            setnameValidation({ nameValidation: false })
        }
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }


    return (
        <div>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create New Post</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add an image to your bin using an image url, description and your name
                    </DialogContentText>
                    <form>
                        <FormControl>
                            <TextField
                                autoFocus
                                margin="dense"
                                id="Description"
                                label="Image Description"
                                type="text"
                                fullWidth
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                margin="dense"
                                id="url"
                                label="Image url"
                                type="url"
                                fullWidth
                                error={urlValidation}
                                onChange={handleUrlChange}
                            />
                        </FormControl>
                        <FormControl>
                            <TextField
                                margin="dense"
                                id="name"
                                label="Author Name"
                                type="text"
                                error={false}
                                fullWidth
                            />
                        </FormControl>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Cancel
                        </Button>
                            <Button type="submit" onClick={handleSubmit} color="primary">
                                Subscribe
                        </Button>
                        </DialogActions>
                    </form>
                </DialogContent>


            </Dialog>

        </div>
    )


}
export default CreateNewPost;    
