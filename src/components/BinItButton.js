import React from 'react'
import { gql, useLazyQuery, useMutation } from '@apollo/client';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress'



export default function BinItButton({ image_obj }) {

    const bin_it_query = gql`
        mutation updateImage($id: ID!
                $url: String
                $posterName: String
                $description: String
                $userPosted: Boolean
                $binned: Boolean){
                    updateImage( id: $id, url: $url, posterName: $posterName, description: $description, userPosted: $userPosted, binned: $binned){
                         
                        id
                        url
                        posterName
                        description
                        userPosted
                        binned

                    }
                        
                    
             }
        
        
    `;
    const [binIt] = useMutation(bin_it_query);

    const run_query = () => {
        binIt({ variables: { id: image_obj.id, url: image_obj.url, posterName: image_obj.posterName, description: image_obj.description, userPosted: image_obj.userPosted, binned: image_obj.binned } });
    }

    console.log(image_obj)

    if (image_obj.binned == false) {
        return (

            <div>
                <Button color="secondary" onClick={run_query}>Add to Bin</Button>
            </div>
        )
    }
    else {
        return (

            <div>
                <Button color="secondary" onClick={run_query}>Remove from Bin</Button>
            </div>
        )
    }






}