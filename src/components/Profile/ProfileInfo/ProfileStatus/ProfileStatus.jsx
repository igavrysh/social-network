import React from 'react';
import { reduxForm, Field } from 'redux-form';

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    status: this.props.status
  };

  activateEditMode = () => {
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
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({
        status: this.props.status
      });
      this.deactivateEditMode();
    }
  }

  statusEditFormUpdate = (values) => {
    this.props.updateStatus(values.statusBody);
    /*
    this.setState({
      status: values.statusBody
    });
    */
  }

  render() {
    return (
      <div>
        {!this.state.editMode &&
          <div>
            <span
              onDoubleClick={this.activateEditMode}>
              {this.state.status || '---'}
            </span>
          </div>
        }
        {this.state.editMode &&
          <div>
            <div>
              <StatusEditFormRedux 
                value={this.state.status}
                onSubmit={this.statusEditFormUpdate}
                onBlur={this.statusEditFormUpdate} />
            </div>
          </div>
        }
      </div>
    );
  }
}

const StatusEditForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          component='input'
          name='statusBody' 
          value={props.value} />
      </div>
      <div>
        <button>
          Update
        </button>
      </div>
    </form>
  )
}

const StatusEditFormRedux = reduxForm(
  {
    form: 'profileStatusEditForm'
  }
)(StatusEditForm);

export default ProfileStatus;