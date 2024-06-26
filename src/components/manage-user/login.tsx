import { memo, useCallback } from "react";
import { EmailPassword } from "./mail-password-form";
import { useUserInformation } from "../../hooks";
import { FieldValues, FormProvider, SubmitHandler, useForm } from "react-hook-form";
import { Form, SubmitButton } from "./styles";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";

export const LogIn = memo(() => {
    const { userInfo } = useUserInformation();
    const formMethods = useForm();
    const navigate = useNavigate();

    const validateExistingUser = useCallback((password: string, emailValue: string) => (
        Boolean(userInfo?.password === password && userInfo?.email === emailValue)
    ), [userInfo]);

    const onSubmit: SubmitHandler<FieldValues> = useCallback((values) => {
        if (!userInfo) {
            toast.error('User not registered, Please Sign In');
        } else {
            if (validateExistingUser(values.password, values.email)) {
                navigate('/');
            } else {
                toast.error('Wrong credentials');
            }
        }
    }, [navigate, userInfo, validateExistingUser]);

    return (
        <FormProvider {...formMethods}>
            <Form onSubmit={formMethods.handleSubmit(onSubmit)}>
                <EmailPassword />
                <SubmitButton value="Submit" />
            </Form>
        </FormProvider>
    );
});
