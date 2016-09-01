import React, {PropTypes} from 'react';
import MenuItem from 'material-ui/MenuItem'
import RaisedButton from 'material-ui/RaisedButton';
import {Field} from 'redux-form';

import renderTextField from './renderTextField';
import renderSelectField from './renderSelectField';

export const categoryListItem = (categoryList) => {
  return categoryList.map((categoryData) => (<MenuItem key={categoryData.id} value={categoryData.id} primaryText={categoryData.name}/>))
}

const EditWordForm = ({handleSubmit, pristine, submitting, categoryList}) => (
  <form onSubmit={handleSubmit}>
    <Field name="title" component={renderTextField} label="Title" placeholder="Title" required/>
    <Field name="translation" component={renderTextField} label="Translation" placeholder="Translation" required/>
    <Field name="description" component={renderTextField} label="Description" placeholder=""/>
    <Field name="categoryId" component={renderSelectField} label="Category:">
      {categoryListItem(categoryList)}
    </Field>
    <RaisedButton label="Save" disabled={pristine || submitting} primary type="submit" onClick={() => {}}/>
  </form>
)

EditWordForm.propTypes = {
  categoryList: PropTypes.array.isRequired,
  initialValues: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired
}

export default EditWordForm;
