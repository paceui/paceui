import { Button } from "@/components/ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

export const Demo = ({ ...props }) => {
    return (
        <Dialog {...props}>
            <DialogTrigger asChild>
                <Button variant="outline">Open</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account and remove your data
                        from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="justify-end">
                    <DialogClose asChild>
                        <Button variant="soft">Close</Button>
                    </DialogClose>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};
