import React from 'react'
import { gql, useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';


function DeletePost({ image_obj, deleteCalled }) {

    const delete_image_query = gql`
        mutation deleteImage($id: ID!){
                    deleteImage(id: $id){
                        id
                    }
             }
    `;

    const [delete_image] = useMutation(delete_image_query);
    const run_query = () => {
        delete_image({ variables: { id: image_obj.id } })
        deleteCalled()

    }
    return (

        <div>
            <Button type="submit" color="secondary" onClick={run_query}>Delete Post</Button>
        </div>
    )
}

export default DeletePost;
