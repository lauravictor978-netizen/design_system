import {Button} from "@/components/ui/button"
import {
    Card,
    CardAction,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,

} from "@/components/ui/card"

export default function CardDemo() {
    return (
        <div className = "flex flex-row min-h-screen items-center justify-center">
          <Card className="w-full-max-w-sm">
            <CardHeader>
                <CardTitle>Login to your account</CardTitle>
            </CardHeader>

          </Card>

        </div>
    )
}