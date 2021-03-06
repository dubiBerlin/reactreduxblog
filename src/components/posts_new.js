import React, { Component } from "react";
/* 1. redux-form import */
import { Field, reduxForm } from "redux-form";
/* 7. importieren um wieder zurück zu navigieren */
import { Link } from "react-router-dom";
/* 8. senden der daten zum server */
import { connect } from "react-redux";
import { createPost } from "../actions";

class PostsNew extends Component {
  /* 4. field Param enthält Event Handlers die angebunden werden müssen.
        Es fügt in das <Field> Element ein input Element ein. */
  renderField(field) {
    var className = "form-group";
    /* gucken ob in das Field schon reingelickt wurde und ob error objekt besteht  */
    if (field.meta.error && field.meta.touched) {
      className = className + " has-danger";
    }

    return (
      <div className={className}>
        <label>{field.slabel}</label>
        {/* ... field.input deckt alle Eventhandlers ab */}
        <input type="text" className="form-control" {...field.input} />

        <div className="text-help">
          {/* 5.2
            field.meta.touched  = solange das input Field unberührt ist, also es das erstmal geladen wurde,
            soll keine errormessage angezeigt werden.
            field.meta.error nimmt das "name" property und schaut im error-Objekten nach
            ob es einen String gibt mit dem "name" property. Wenn ja, dann
           gibt er die Fehlermeldung zurück die in der validate() Methode eingefügt wurde. */}
          {field.meta.touched ? field.meta.error : ""}
        </div>
      </div>
    );
  }

  /* 6.3 Diese eigens erstellte Methode wird
         aufgerufen um die Daten zu versenden bzw. das zu tun nach dem alle Komponenten
        innerhalb der Form überprüft worden sind.
    param: values : (Object): wird von der handleSubmit Methode übergeben und enthält alle Werte  */
  onSubmit(values) {
    /* 8.2 */
    this.props.createPost(values, response => {
      console.log("response", response);
      /* 9. zurück navigieren nach dem response des servers. History ist ein prop des von React-Router in die+
            PostNew Komponente eingefügt worden ist. Wenn Route zu einer Komponente hinnavigiert, injiziert sie in die
            Komponente viele props, damit die Komponente weitere Navigationen handlen kann. */
      this.props.history.push("/");
    });
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
        {/* 7.1 navigation mit dem to paramter */}
        <Link to="/" className="btn btn-danger">
          Cancel
        </Link>
      </form>
    );
  }
}

/* 5. Funktion die die Form Inputs validiert
      param: values:(Object) enthält alle Werte die in die Form eingegeben wurden */
function validate(values) {
  const errors = {};

  // validate the imputs from "values"
  if (!values.title) {
    errors.title = "Enter a title!";
    errors.class = "has-danger";
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!";
    errors.class = "has-danger";
  }
  if (!values.content) {
    errors.content = "Enter some content!";
    errors.class = "has-danger";
  }

  return errors;
}

/* 2. bindet reduxForm an die Componente und übergibt somit viele eigene properties an die Komponente
      form:PostsNewForm hier registriert man alle Forms die sich in der Seite befinden */
export default reduxForm({
  /* 5.1. Validierungsfunktion in reduxForm registrieren  */
  validate: validate,
  form: "PostsNewForm"
})(connect(null, { createPost })(PostsNew)); // 8.1. den ActionCreator anbinden
