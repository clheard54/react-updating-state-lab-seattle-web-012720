// Code YouTubeDebugger Component Here
import React from 'react';

export default class YouTubeDebugger extends React.Component{
    state = {
        errors: [],
        user: null,
        settings: {
          bitrate: 8,
          video: {
            resolution: '1080p'
          }
        }
      }

      handleClick = () => {
        this.setState({
            settings: {
              ...this.state.settings,
              bitrate: 12
            }
           });
      }

      updateRes = () => {
          this.setState({
              settings: {
                  ...this.state.settings,
                  video: {resolution: '720p'}
              }
          })
      }

      render(){
          return (
              <div>
                <button onClick={this.handleClick} className="bitrate">Change BitRate</button>
                <button onClick={this.updateRes} className="resolution">Change Res</button>
            </div>
          )
      }

}



