import React from 'react';
import { connect } from 'react-redux';
import {fetchImage, uploadImage} from 'actions/floorplan';

class AddFloorPlanPage extends React.Component {

  constructor() {
    super();
    this.submit = this.submit.bind(this);
    this.displayName = 'UploadImage';
    this.state = {file: '',imagePreviewUrl:'',areaId:'',showOldMap:true}
  }
  componentWillMount(){
    this.props.dispatch(fetchImage(this.props.params.id));
  }

  componentDidMount() {

    this.refs.floorplanimage.onchange = () => {
      var files = document.getElementById("img").files;
      var file = files[0];
      var reader = new FileReader();

      reader.onload = e => {
        document.getElementById('image-preview').style.backgroundImage = `url(${e.target.result})`;
        document.getElementById('image-preview').className="has-image";
      };
      reader.readAsDataURL(file);
    }
  }

  render() {
    let dataUri = this.props.floorplan.image ? 'data:image/jpg;base64,' + this.props.floorplan.image : '';
    return(
      <div className="locations">
           <div className="floorplan-upload-page">
             <div className="floorplan-image-container">
               <div id="image-preview" ref="preview" style={{backgroundImage:`url(${dataUri})`}}>
                 <div className="remove-image" onClick={this.clearImage.bind(this)}>Clear image</div>
               </div>
               <div className="actions">
                 <input type="file" id="img" ref="floorplanimage" accept="image/jpg" />
                 <input type="button" value="UPLOAD" onClick={this.submit} />
               </div>
             </div>
           </div>
      </div>
    )
  }

  submit() {
    let data = {
      image: document.getElementById("img").files[0],
      areaId: this.props.params.id
    };
    this.props.dispatch(uploadImage(data))
  }

  clearImage() {
    document.getElementById("img").value = '';
    document.getElementById('image-preview').style.backgroundImage = '';
    document.getElementById('image-preview').className = '';
  }
}

function mapStateToProps(state){
  return {
    floorplan: state.floorPlanReducer
  }
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddFloorPlanPage);
