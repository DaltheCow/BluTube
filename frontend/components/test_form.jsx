import React from 'react';

class TestForm extends React.Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    $(document).ready(function(){
      $('form input').change(function () {
        $('form p').text(this.files.length + " file(s) selected");
      });
    });
  }


  render() {

    return (
      <div>
        <form className="test-form-form" action="upload.php" method="POST">
          <input className="test-form-input" type="file" multiple/>
          <p className="test-form-p" >Drag your files here or click in this area.</p>
          <button className="test-form-btn" type="submit">Upload</button>
        </form>
      </div>
    );
  }
}

export default TestForm;
