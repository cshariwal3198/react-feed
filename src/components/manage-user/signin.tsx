import { memo, useCallback } from "react";
import { useUserInformation } from "../../hooks";
import { ErrorText, Form, Input, InputWrapper, Label, SubmitButton, ItemWrapper, FormContainer, HeaderText } from "./styles";
import { EmailPassword } from "./mail-password-form";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { IUserInfo } from "../../types";
import { validateUserName } from "./utils";
import { toast } from "react-hot-toast";

export const SignIn = memo(() => {

    const { userInfo: userDetails, updateUserInfo } = useUserInformation();
    const formMethods = useForm();
    const { register, formState: { errors }, reset } = formMethods;
    const showSuccessToast = () => (toast.success('Successfully created!'));

    const onSubmit: SubmitHandler<FieldValues> = useCallback((values: FieldValues) => {
        if (!userDetails) {
            updateUserInfo(values as IUserInfo);
            showSuccessToast();
        } else {
            toast.error('User already registered, Please Login');
        }
        reset({ userName: '', email: '', password: '' });
    }, [reset, updateUserInfo, userDetails]);

    const renderUserNameBlock = useCallback(() => (
        <InputWrapper>
            <Input type="text" id="userName" {...register('userName', { validate: validateUserName })} />
            {
                errors?.userName ? <ErrorText>{errors.userName.message as string}</ErrorText> : null
            }
        </InputWrapper>
    ), [errors.userName, register]);

    return (
        <FormProvider {...formMethods}>
            <FormContainer>
                <HeaderText>Sign In</HeaderText>
                <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
                    <ItemWrapper>
                        <Label htmlFor="userName">UserName</Label>
                        {
                            renderUserNameBlock()
                        }
                    </ItemWrapper>
                    <EmailPassword />
                    <SubmitButton value="Submit" />
                </Form>
            </FormContainer>
        </FormProvider>
    )
});
