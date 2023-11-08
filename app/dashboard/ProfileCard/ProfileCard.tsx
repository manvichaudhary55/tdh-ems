import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { currentUserActions } from "@/lib/userActions";
import React, { Suspense } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import EditName from "./EditName";
import LogoutButton from "@/app/auth/logout/LogoutButton";
import Fallback from "./Fallback";
import EditAvatar from "./EditAvatar";

type Props = {};

const ProfileCard = async (props: Props) => {
  const user = await currentUserActions.getUser();
  const userDetails = await currentUserActions.getDetails();
  const userAvatarUrl = await currentUserActions.getUserAvatarURL();

  return (
    <Card className="max-w-xs w-full">
      <CardHeader>
        <EditAvatar
          full_name={userDetails.full_name}
          avatar_url={userAvatarUrl}
        />
        <CardTitle>
          <EditName full_name={userDetails.full_name} />
        </CardTitle>
        <CardDescription>{user?.email || user?.phone}</CardDescription>
      </CardHeader>

      <CardContent>
        <LogoutButton />
      </CardContent>
    </Card>
  );
};

const ProfileCardWithSuspense = () => {
  return (
    <Suspense fallback={<Fallback />}>
      <ProfileCard />
    </Suspense>
  );
};

export { ProfileCardWithSuspense as ProfileCard };
