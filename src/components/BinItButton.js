import React from 'react'
import { gql, useLazyQuery } from '@apollo/client';
import Button from '@material-ui/core/Button';

export default function BinItButton(props) {
    const bin_it_query = gql`
    mutation{
         updateImage(id: ${props.id}, url: ${props.url}, posterName: ${props.posterName}, description: ${props.description} , 
            userPosted: ${props.userPosted}, binned: ${props.binned}){
                id
                posterName
                url
                binned
            }
    }
`
    const [loadGreeting, { called, loading, data }] = useLazyQuery(bin_it_query);
    if (called && loading) return <p>Loading ...</p>
    else {
        return <Button color="secondary" onClick={() => loadGreeting()}>Add to Bin</Button>
    }

}