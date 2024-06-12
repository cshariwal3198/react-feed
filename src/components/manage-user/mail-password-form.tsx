import { memo } from "react";
import { ErrorText, Input, InputWrapper, Label, ItemWrapper } from "./styles";
import { useFormContext } from "react-hook-form";
import { validateEmail, validatePassword } from "./utils";
import { useDisplaySizeGroup } from "../../hooks";

export const EmailPassword = memo(() => {

    const { formState: { errors }, register } = useFormContext();
    const { isSM } = useDisplaySizeGroup();

    return (
        <>
            <ItemWrapper $isSM={isSM}>
                <Label htmlFor="email">Email</Label>
                <InputWrapper>
                    <Input type="email" id="email" placeholder="Email" {...register('email', { validate: validateEmail })} />
                    {
                        errors?.email ? <ErrorText>{errors.email.message as string}</ErrorText> : null
                    }
                </InputWrapper>
            </ItemWrapper>
            <ItemWrapper $isSM={isSM}>
                <Label htmlFor="password">Password</Label>
                <InputWrapper>
                    <Input type="password" id="password" placeholder="Password" {...register('password', { validate: validatePassword })} />
                    {
                        errors?.password ? <ErrorText>{errors?.password?.message as string}</ErrorText> : null
                    }
                </InputWrapper>
            </ItemWrapper>
        </>
    );
});
