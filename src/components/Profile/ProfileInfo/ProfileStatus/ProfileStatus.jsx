import React from 'react';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
    debugger
    this.setState({
      editMode: true,
      status: this.props.status
    });
    //this.forceUpdate();
  }

  deactivateEditMode = () => {
    this.setState({
      editMode: false
    });
    this.props.updateStatus(this.state.status);
  }

  onStatusChange = (e) => {
    //debugger;
    this.setState({
      status: e.currentTarget.value
    });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
    }
  }

  render() {
    console.log('render ProfileStatus component');
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span
              onDoubleClick={this.activateEditMode}>
              {this.state.status || '---' }
            </span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <input
              onChange={this.onStatusChange}
              autoFocus={true}
              onBlur={this.deactivateEditMode}
              value={this.state.status}>
            </input>
          </div>
        }
      </div>
    );
  }
}

export default ProfileStatus;