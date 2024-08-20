import React from 'react';

class AddUser extends React.Component {
    userAdd = {}
    constructor(props){
        super(props)
        this.state = {
            first_name: "",
            last_name: "",
            bio: "",
            age: 1,
            isHappy: false
        }
    }
    render(){
        return(
        <form ref={(el) => this.myForm = el}>
            <input placeholder='Name' onChange={(e) => this.setState({first_name: e.target.value})}></input>
            <input placeholder='Lastname'onChange={(e) => this.setState({last_name: e.target.value})}></input>
            <textarea placeholder='Email' onChange={(e) => this.setState({bio: e.target.value})}/>
            <input placeholder='Age' onChange={(e) => this.setState({age: e.target.value})}></input>
            <label htmlFor='isHappy'>Счастлив?</label>
            <input type='checkbox' id='isHappy'onChange={(e) => this.setState({isHappy: e.target.checked})}></input>
            <button type='button' onClick={() => {
            this.myForm.reset()
            this.userAdd = {
                first_name: this.state.first_name,
                last_name: this.state.last_name,
                bio: this.state.bio,
                age: this.state.age,
                isHappy: this.state.isHappy,

            }
            if(this.props.user)
                this.userAdd.id = this.props.user.id
            this.props.onAdd(this.userAdd)
        }
        }>Добавить</button>
        </form>
    )
    }
}

export default AddUser