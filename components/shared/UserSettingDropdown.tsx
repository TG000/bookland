import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User } from "lucia";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import {
    MdAdd,
    MdAddCircleOutline,
    MdCreditCard,
    MdMailOutline,
    MdOutlineContactSupport,
    MdOutlineGroup,
    MdOutlineMessage,
    MdOutlineSettings,
    MdPersonAddAlt,
    MdPersonOutline,
} from "react-icons/md";
import SignOutForm from "../forms/SignOutForm";

const UserSettingDropdown = ({ user }: { user: User }) => {
    return (
        <DropdownMenu modal={false}>
            <DropdownMenuTrigger asChild>
                <Avatar className="h-12 w-12 hover:cursor-pointer">
                    <AvatarImage src={user.profilePictureURL} />
                    <AvatarFallback className="text-white">You</AvatarFallback>
                </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                className="w-56"
                side="bottom"
                sideOffset={10}
                align="end"
            >
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <MdPersonOutline className="mr-2 h-4 w-4" />
                        <span>Profile</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MdCreditCard className="mr-2 h-4 w-4" />
                        <span>Billing</span>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <MdOutlineSettings className="mr-2 h-4 w-4" />
                        <span>Settings</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <MdOutlineGroup className="mr-2 h-4 w-4" />
                        <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <MdPersonAddAlt className="mr-2 h-4 w-4" />
                            <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent
                                sideOffset={10}
                                alignOffset={-5}
                            >
                                <DropdownMenuItem>
                                    <MdMailOutline className="mr-2 h-4 w-4" />
                                    <span>Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MdOutlineMessage className="mr-2 h-4 w-4" />
                                    <span>Message</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                                <DropdownMenuItem>
                                    <MdAddCircleOutline className="mr-2 h-4 w-4" />
                                    <span>More...</span>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <MdAdd className="mr-2 h-4 w-4" />
                        <span>New Team</span>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <MdOutlineContactSupport className="mr-2 h-4 w-4" />
                    <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <SignOutForm />
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UserSettingDropdown;
