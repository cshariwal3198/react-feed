import { memo, useCallback, useMemo, useState } from "react";
import { useDisplaySizeGroup, useUserInformation } from "../../hooks";
import { ErrorText, Form, Input, InputWrapper, Label, SubmitButton, ItemWrapper, FormContainer, HeaderText, Wrapper, Footer, StyledButtonLink } from "./styles";
import { EmailPassword } from "./mail-password-form";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IUserInfo } from "../../types";
import { validateUserName } from "./utils";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignIn = memo(() => {

    const { userInfo: userDetails, updateUserInfo } = useUserInformation();
    const [isLogin, setIsLogin] = useState<boolean>(false);
    const formMethods = useForm();
    const { register, formState: { errors }, reset } = formMethods;
    const showSuccessToast = () => (toast.success('Successfully created!'));
    const { isSM } = useDisplaySizeGroup();
    const navigate = useNavigate();
    const showErrorMessge = (message: string) => (toast.error(message));

    const validateExistingUser = useCallback((password: string, emailValue: string) => (
        Boolean(userDetails?.password === password && userDetails?.email === emailValue)
    ), [userDetails?.email, userDetails?.password]);

    const onLogin: SubmitHandler<FieldValues> = useCallback((values) => {
        if (!userDetails) {
            showErrorMessge('User not registered, Please Sign In');
        } else {
            if (validateExistingUser(values.password, values.email)) {
                navigate('/');
            } else {
                showErrorMessge('Wrong credentials');
            }
        }
    }, [navigate, userDetails, validateExistingUser]);


    const onSignIn: SubmitHandler<FieldValues> = useCallback((values: FieldValues) => {
        if (!userDetails) {
            updateUserInfo(values as IUserInfo);
            showSuccessToast();
        } else {
            toast.error('User already registered, Please Login');
        }
        reset({ userName: '', email: '', password: '' });
    }, [reset, updateUserInfo, userDetails]);

    const onClick = useCallback(() => (setIsLogin(!isLogin)), [isLogin]);

    const renderUserNameBlock = useCallback(() => (
        <InputWrapper>
            <Input type="text" id="userName" placeholder="User Name" {...register('userName', { validate: validateUserName })} />
            {
                errors?.userName ? <ErrorText>{errors.userName.message as string}</ErrorText> : null
            }
        </InputWrapper>
    ), [errors.userName, register]);

    const onSubmitCallback = useMemo(() => (isLogin ? onLogin : onSignIn), [isLogin, onLogin, onSignIn]);

    return (
        <Wrapper>
            <FormProvider {...formMethods}>
                <FormContainer>
                    <HeaderText>{isLogin ? 'Sign In' : 'Log In'}</HeaderText>
                    <Form onSubmit={formMethods.handleSubmit(onSubmitCallback)}>
                        {
                            isLogin ? (
                                <ItemWrapper $isSM={isSM}>
                                    <Label htmlFor="userName">UserName</Label>
                                    {
                                        renderUserNameBlock()
                                    }
                                </ItemWrapper>
                            ) : null
                        }
                        <EmailPassword />
                        <SubmitButton value="Continue" />
                    </Form>
                    <Footer>
                        {isLogin ? 'Already A User, ' : 'New User, '} <StyledButtonLink onClick={onClick}>{isLogin ? ' Log In' : ' Sign In'}</StyledButtonLink>
                    </Footer>
                </FormContainer>
            </FormProvider>
        </Wrapper>
    )
});

export default SignIn;
