import React, { Component } from 'react'
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import { ChromePicker } from "react-color";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import styles from './styles/ColorPickerFormStyles';


class ColorPickerForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            currentColor : "teal",
            newColorName: ""
        }
        this.updateCurrentColor = this.updateCurrentColor.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount() {
        ValidatorForm.addValidationRule("isColorNameUnique", value =>
        this.props.colors.every(
          ({ name }) => name.toLowerCase() !== value.toLowerCase()
        )
      );
               
        ValidatorForm.addValidationRule("isColorUnique", value =>
          this.props.colors.every(({ color }) => color !== this.state.currentColor)
        );
      }
    updateCurrentColor(newColor) {
        this.setState({ currentColor: newColor.hex });
      }
      handleChange(evt) {
        this.setState({
          [evt.target.name]: evt.target.value
        });
      }
    handleSubmit(){
        const newColor = {
            color: this.state.currentColor,
            name: this.state.newColorName
          };
          this.props.addNewColor(newColor)
    }
    render() {
        const {paletteIsFull, classes} = this.props;
        const {currentColor, newColorName} = this.state;
        return (
            <div>
                 <ChromePicker
                 className = {classes.picker}
            color={currentColor}
            onChangeComplete={this.updateCurrentColor}
          />
          <ValidatorForm onSubmit={this.handleSubmit} ref='form'>
            <TextValidator
            placeholder = "Color Name"
            margin = "normal"
            variant= "filled"
            className = {classes.colorNameInput}
              value={newColorName}
              name='newColorName'
              onChange={this.handleChange}
              validators={["required", "isColorNameUnique", "isColorUnique"]}
              errorMessages={[
                "Enter a color name",
                "Color name must be unique",
                "Color already used!"
              ]}
            />
            <Button
              variant='contained'
              type='submit'
              color='primary'
              disabled = { paletteIsFull}
              className = {classes.addColor}
              style={{ backgroundColor: paletteIsFull ? "grey" : currentColor }}
            >
              {this.props.paletteIsFull ? "Palette Full" : "Add Color"}
            </Button>
          </ValidatorForm>
            </div>
        )
    }
}

export default withStyles(styles, { withTheme: true })(ColorPickerForm);
