import { ShieldAlertIcon } from "lucide-react";

import {
    Item,
    ItemContent,
    ItemDescription,
    ItemMedia,
    ItemTitle
} from "@/components/ui/item";
import { SignInButton } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export const UnauthenticatedView = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-background">
            <div className="w-full max-w-lg bg-muted">
                <Item variant="outline">
                    <ItemMedia variant="icon">
                        <ShieldAlertIcon/>
                    </ItemMedia>
                    <ItemContent>
                        Unauthorized Access
                        <ItemDescription>
                        You are not authorized to access this resources.
                        </ItemDescription>
                    </ItemContent>
                    <SignInButton>
                        <Button variant="outline" size="sm">
                            Sign In
                        </Button>
                    </SignInButton>
                </Item>
            </div>
        </div>
    )
}