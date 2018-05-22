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
        {/* 5.2
            field.meta.touched  = solange das unberührt ist, also es das erstmal geladen wurde,
            soll keine errormessage angezeigt werden.
            field.meta.error nimmt das "name" property und schaut im error-Objekten nach
            ob es einen String gibt mit dem name property. Wenn ja, dann
           gibt er die Fehlermeldung zurück die in der validate() Methode eingefügt wurde. */}
        {field.meta.touched ? field.meta.error : ""}
      </div>
    );
  }

  /* 6.3 Diese eigens erstellte Methode wird
         aufgerufen um die Daten zu versenden bzw. das zu tun nach dem alle Komponenten
        innerhalb der Form überprüft worden sind.
    param: values : (Object): wird von der handleSubmit Methode übergeben und enthält alle Werte  */
  onSubmit(values) {
    console.log(values);
  }

  render() {
    /* 6.1 handleSubmit ist eine Funtion die von ReduxForm an die Komponente übergeben wurde
           in der binding Methode "export default reduxForm" */
    const { handleSubmit } = this.props;

    return (
      /* 6.2 handleSubmit bindet die Methode selbsterstellte Methode onSubmit() and das Form Element */
      <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <button className="btn btn-secondary">Cancel</button>
      </form>
    );
  }
}

/* 5. Funktion die die Form Inputs validiert
      param: values:(Object) enthält alle Werte die in die Form eingegeben wurden */
function validate(values) {
  const errors = {};

  // validate the imputs from "values"
  if (!values.title || values.title != null) {
    errors.title = "Enter a title!";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
  }

  return errors;
}

/* 2. bindet reduxForm an die Componente und übergibt somit viele eigene properties an die Komponente
      form:PostsNewForm hier registriert man alle Forms die sich in der Seite befinden */
export default reduxForm({
  /* 5.1. Validierungsfunktion in reduxForm registrieren  */
  validate: validate,
  form: "PostsNewForm"
})(PostsNew);
