import React from 'react';
import { Form, Input, Button } from 'antd';
import { useDispatch, useSelector } from 'react-redux';

import { UserOutlined, LockOutlined, RightOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import './login-form.scss';
import { clearLoginFormErrors, loginUser } from '../../features/actions/profile.actions';
import { selectLoginErrors } from '../../features/selectors/profile.selectors';
import { isEmpty } from 'lodash';

const LoginForm = () => {
	const dispatch = useDispatch();
	const loginErrors = useSelector(selectLoginErrors);

	// Submit login
	const onFinish = (values) => {
		let loginData = { username: values.username, password: values.password };
		dispatch(loginUser(loginData));
	};

	// clear Errors
	const clearErrors = () => {
		if (!isEmpty(loginErrors)) {
			dispatch(clearLoginFormErrors());
		}
	};
	return (
		<div className="login-form-container global-flex-column-h-center-v-center ">
			{!isEmpty(loginErrors) && (
				<div className="error-message">
					<QuestionCircleOutlined />
					<span className="error-message__content">{loginErrors}</span>
				</div>
			)}
			<Form name="normal_login" className="login-form" initialValues={{ remember: true }} onFinish={onFinish}>
				<Form.Item name="username" rules={[ { required: true, message: 'Please input your Username!' } ]}>
					<Input
						className={`${!isEmpty(loginErrors) && `global-required-field`}`}
						prefix={<UserOutlined className="site-form-item-icon" />}
						placeholder="Username"
						onChange={() => clearErrors()}
					/>
				</Form.Item>
				<Form.Item name="password" rules={[ { required: true, message: 'Please input your Password!' } ]}>
					<Input
						prefix={<LockOutlined className="site-form-item-icon" />}
						type="password"
						placeholder="Password"
						className={`${!isEmpty(loginErrors) && `global-required-field`}`}
						onChange={() => clearErrors()}
					/>
				</Form.Item>

				<Form.Item>
					<Button type="primary" htmlType="submit" className="login-form-button">
						Log in <RightOutlined />
					</Button>
				</Form.Item>
			</Form>
		</div>
	);
};

export default LoginForm;
