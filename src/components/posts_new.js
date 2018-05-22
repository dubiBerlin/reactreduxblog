import React, { Component } from "react";
/* 1. redux-form import */
import { Field, reduxForm } from "redux-form";

class PostsNew extends Component {
  /* 4. field Param enthält Event Handlers die angebunden werden müssen.
        Es fügt in das <Field> Element ein input Element ein. */
  renderField(field) {
    return (
      <div className="form-group">
        <label>{field.slabel}</label>
        {/* ... field.input deckt alle Eventhandlers ab */}
        <input type="text" className="form-control" {...field.input} />
      </div>
    );
  }

  render() {
    return (
      <form>
        {/*3. field kann nur mit redux kommunizieren und weiß nicht wie es gezeichnet werden muss
              Es muss eine Funktion aufgerufen werden, die JSX zurückgibt, es also zeichnet */}
        <Field
          slabel="Title for post"
          name="title"
          component={this.renderField}
        />
        <Field
          slabel="Categories"
          name="categories"
          component={this.renderField}
        />
        <Field
          slabel="Post Content"
          name="content"
          component={this.renderField}
        />
      </form>
    );
  }
}

/* 2. form:PostsNewForm hier registriert man alle Forms die sich in der Seite befinden */
export default reduxForm({
  form: "PostsNewForm"
})(PostsNew);
