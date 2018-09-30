import React , {Component} from 'react';
import {Picker,Text} from 'react-native';
import {Card,CardSection,Input,Button} from './common';
import {connect} from 'react-redux';
import {employeeUpdate,employeeCreate} from '../actions';
class EmployeeCreate extends Component {
    onButtonPress(){
        const {name,phone,shift} = this.props;
    this.props.employeeCreate({name,phone,shift});
    }
    render(){
        return(
            <Card>
                <CardSection>
                    <Input label = 'Name'
                    placeholder = 'Ex:Jane'
                   value = {this.props.name}
                    onChangeText = {text => this.props.employeeUpdate({prop:'name',value:text})}
                    />
                </CardSection>

                <CardSection>
                    <Input
                    label = 'Phone'
                    placeholder = 'Ex:01234567890'
                    value = {this.props.phone}
                    onChangeText = {text => this.props.employeeUpdate({prop:'phone',value:text})}
                    keyboardType = {'phone-pad'}
                    />
                </CardSection>

                <CardSection style={{flexDirection:'column'}}>
                    <Text style={styles.pickerTextStyle}>
                        Select a Shift
                    </Text>
                <Picker
                    selectedValue={this.props.shift}
                    
                    mode='dropdown'
                    onValueChange={value => {this.props.employeeUpdate({prop:'shift',value})}}
                    >
                    <Picker.Item label="Saturday" value="Saturday" />
                    <Picker.Item label="Sunday" value="Sunday" />
                    <Picker.Item label="Monday" value="Monday" />
                    <Picker.Item label="Tuesday" value="Tuesday" />
                    <Picker.Item label="Wendensday" value="Wendensday" />
                    <Picker.Item label="Thursday" value="Thursday" />
                    <Picker.Item label="Friday" value="Friday" />
                </Picker>
                </CardSection>
                <CardSection>
                    <Button pressed={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>


            </Card>
        );
    }
}
const styles = {
    pickerTextStyle:{
        fontSize:15,
        paddingLeft:15
    }
};
const mapStateToProps = (state) => {
    const {name,phone,shift} = state.employeeForm;
    return{name,phone,shift};
};
export default connect(mapStateToProps,{employeeUpdate,employeeCreate})(EmployeeCreate);