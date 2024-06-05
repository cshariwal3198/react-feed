import { memo } from "react";
import { ErrorText, Input, InputWrapper, Label, ItemWrapper } from "./styles";
import { useFormContext } from "react-hook-form";
import { validateEmail, validatePassword } from "./utils";

export const EmailPassword = memo(() => {

    const { formState: { errors }, register } = useFormContext();

    return (
        <>
            <ItemWrapper>
                <Label htmlFor="email">Email</Label>
                <InputWrapper>
                    <Input type="email" id="email" {...register('email', { validate: validateEmail })} />
                    {
                        errors?.email ? <ErrorText>{errors.email.message as string}</ErrorText> : null
                    }
                </InputWrapper>
            </ItemWrapper>
            <ItemWrapper>
                <Label htmlFor="password">Password</Label>
                <InputWrapper>
                    <Input type="password" id="password" {...register('password', { validate: validatePassword })} />
                    {
                        errors?.password ? <ErrorText>{errors?.password?.message as string}</ErrorText> : null
                    }
                </InputWrapper>
            </ItemWrapper>
        </>
    );
});
