import React,{Component} from 'react';
import {Redirect} from 'react-router-dom';
import {connect} from "react-redux";
import {signUp} from "../../store/actions/authAction";

class SignUp extends Component{
    state = {
        email: "",
        password: "",
        firstname: "",
        lastname: "",
   

    }
    handleChange = (e) =>{
        console.log([e.target.id], e.target.value);
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        const {props, state} = this;
        const newUser = {...state};
        props.signUp(newUser);
    }
    render() {
        const {authError} = this.props;
        return(
            <div className="row">
                
                <div className="col-lg-10 col-xl-9 mx-auto">
                    
                    <div className="card card-signup flex-row my-5">
                    
                    <div className="card-img-left d-none d-md-flex">
                        
                    </div>
                    
                    <div className="card-body">
                    <div className="card-title text-danger text-center">Registro de Usuario</div>
                        <form className="form-signup" onSubmit={this.handleSubmit}>

                        <div class="form-label-group">
                            <input onChange={this.handleChange} type="text" id="firstname" class="form-control" placeholder="Username" required autofocus/>
                            <label for="firstname">Nombre</label>
                        </div>
                        <div className="form-label-group">
                            <input onChange={this.handleChange}  type="text" id="lastname" className="form-control" placeholder="username" required autofocus/>
                            <label for="lastname">Apellido</label>
                        </div>

                        <div className="form-label-group">
                            <input onChange={this.handleChange} type="email" id="email" className="form-control" placeholder="Email address" required/>
                            <label for="email" >Correo Electronico</label>
                        </div>
                        
                        <hr/>

                        <div className="form-label-group">
                            <input onChange={this.handleChange} type="password" id="password" className="form-control" placeholder="Password" required/>
                            <label for="password" >Contraseña</label>
                        </div>
                        
                        <div className="form-label-group">
                            <input type="password" id="confirmpassword" className="form-control" placeholder="Password" required/>
                            <label for="confirmpassword">Confirmar contraseña</label>
                        </div>

                        <button className="btn btn-lg btn-primary btn-block text-uppercase" type="submit">Registrar</button>
                        <a className="d-block text-center mt-2 small" href="#">Iniciar sesión</a>
                        <hr className="my-4"/>
                        { authError ? <p>{authError}</p>: null}
                        </form>
                    </div>
                    </div>
                </div>
   
            </div>
        )
    }
   
}
const mapStateToProps = (state) =>{
    return {
        auth: state.firebase.auth,
        authError: state.auth.authError
    }
}
const mapDispatchToProps = (dispatch) =>{
    return{
        signUp: newUser => dispatch(signUp(newUser))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp)