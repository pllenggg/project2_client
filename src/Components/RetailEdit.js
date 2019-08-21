import React,{Component} from 'react';
import RetailForm from './RetailForm';
import axios from 'axios';


const RETAIL_API = `https://bookbeauty.herokuapp.com/retails/:id.json`

class RetailEdit extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            user_id: localStorage.user_id,
            data: {}
        }

        this._handleChange = this._handleChange.bind(this);
        this._handleSubmit = this._handleSubmit.bind(this);
    }

    _handleChange(event) {
        const newData = {
          [event.currentTarget.name]: event.currentTarget.value
        };
        this.setState(({ data }) => {
          return {
            data: {
              ...data,
              ...newData,
            }
          };
        });
      }

    _handleSubmit(event){
        event.preventDefault();
        const info = this.state.data;
        const URL = RETAIL_API.replace(":id", localStorage.user_id);
        axios.put(URL, info).then(()=>{
            this.props.history.go(-1);
        })
    }
    componentDidMount(){
        const url = RETAIL_API.replace(":id", localStorage.user_id);
        axios.get(url).then((result) =>{
            console.log(result.data);
            this.setState({data: result.data})
        })
    }





    render(){
        return(
            <div>
                <RetailForm
                service = {this.state.data}
                onEditing = {this._handleChange}
                onSubmit = {this._handleSubmit}
                />
                
                
            </div>
        )
    }
}

export default RetailEdit;