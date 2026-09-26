import {
    Card,
    CardHeader,
    CardTitle,
    CardDescription
}  from "@/components/ui/button"

import {button} from "@/components/ui/button"

import {
     Field,
     FiledLabel,
     FieldDescription,
} from  "@/components/ui/field"

import {Input} from "@/components/ui/input"


export function SignUpForm((...props): React.ComponentProps<typeof Card>)(
    return(
        <Card>
              <CardHeader>
              <CardTitle>Create an account</CardTitle>
                <CardDescription>
                    Enter your information below to create your account
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form>
                </form>
              </CardContent>
    )
)




export function SignUp(){
    return(
        <div>
            Sign up form
        </div>
    )
}