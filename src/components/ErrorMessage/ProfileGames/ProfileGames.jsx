import React from 'react';
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import GameCard from '../GameCard/GameCard'

export default function Games({posts, numPhotosCol, isProfile, loading, user, removePost }){

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
        {/* {loading ? (
          <Segment>
            {/* <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer> */}
            {/* <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" /> */}
          {/* </Segment> */}
        {/* // ) : null} */} */
        {posts.map((post) => {
          return (
            <GameCard
              post={post}
              key={post._id}
              isProfile={isProfile}
              user={user}
              removePost={removePost}
            />
          );
        })}
      </Card.Group>
  
    )
}