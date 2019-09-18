import React from "react";

class FileImage extends React.Component {
  render() {
    let photo = this.props.data.photo;
    return (
      <React.Fragment>
        <label htmlFor="user_image" className="data__form__image-label">
          Imagen de perfil
        </label>
        <div className="data__form__image">
          <label htmlFor="photo" className="data__form__image-button">
            Añadir imagen
            <input
              type="file"
              id="photo"
              ref={this.props.fileInput}
              onChange={this.props.handleSubmit}
            />
          </label>
          <div
            className="data__form__image-thumbnail"
            style={{ backgroundImage: `url(${photo})` }}
          ></div>
        </div>
      </React.Fragment>
    );
  }
}

export default FileImage;
