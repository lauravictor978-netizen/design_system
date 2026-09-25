import {Button} from '@/components/ui/button'

export default function ButtonDemoPage(){
    return (
        <div className = "flex felx-row min-h-screen items-center justify-center">
            <Button>Default</Button>
            <Button variant = {"secondary"}>secondary</Button>
            <Button variant = {"outline"}>outline</Button>
            <Button variant = {"ghost"}>Ghost</Button>
            <Button  variant = {"link"}>Link</Button>
            <Button variant = {"destructive"}>Destructive</Button>
        </div>
    )
}