import React from 'react';
import { reduxForm } from 'redux-form';
import { CreateField, Input, Textarea } from '../../common/FormsControls/FormsControls';

const ProfileDataForm = ({ handleSubmit, profile }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div><button onClick={handleSubmit}>save</button></div>
      <div>
        <b>Full name</b>: {CreateField('Full name', 'fullName', [], Input)}
      </div>
      <div>
        <b>Looking for a job</b>:
        {CreateField('', 'lookingForAJob', [], Input, { type: 'checkbox' })}
      </div>

      <div>
        <b>My professional skills</b>:
        {CreateField('My professional skills', 'lookingForAJobDescription', [], Textarea)}
      </div>

      <div>
        <b>About me</b>:
        {CreateField('About me', 'aboutMe', [], Textarea)}
      </div>
    </form>
  );
};

const ProfileDataFormRedux = reduxForm({ form: 'edit-profile' })(
  ProfileDataForm
);

export default ProfileDataFormRedux;
