import React , {Component} from 'react';
import {Text} from 'react-native';
import {Card, CardSection ,Input,Button,Spinner} from './common';
import {connect} from 'react-redux';
import {emailChanged,passwordChanged,loginUser} from '../actions';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress(){
        const {email,password} = this.props;
        this.props.loginUser({email,password});
    }
   renderButton = (isloading) => {
        if(isloading)
        return(<Spinner size='large' ></Spinner>
        );
        else
        return (<Button pressed={this.onButtonPress.bind(this)}>
                                Login
                            </Button>);
        }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input 
                    label = 'Email'
                    placeholder = 'Example@gmail.com'
                    onChangeText={this.onEmailChange.bind(this)}
                    value = {this.props.email}
                    />
                </CardSection>
                    
                <CardSection>
                <Input 
                    label = 'Password'
                    placeholder = 'Password'
                    onChangeText = {this.onPasswordChange.bind(this)}
                    value = {this.props.password}
                    secureTextEntry
                    
                    />
                </CardSection>

                <Text style = {styles.errorTextStyle}
                >{this.props.error}</Text>
                <CardSection>
                {this.renderButton(this.props.loading)}
                </CardSection>


            </Card>
        );
    }
}
const styles = {
    errorTextStyle : {
        fontSize:20,
        alignSelf:'center',
        color:'red'
    }
};
const mapStateToProps = ({auth}) => {
    const {email,password,error,loading} = auth;
    return {
        email,
        password,
        error,
        loading
    };
};


export default connect(mapStateToProps,{
    emailChanged,passwordChanged,loginUser
})(LoginForm);