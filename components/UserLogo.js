import React, { useState, useEffect } from "react";
import { Dropdown, Avatar, Text, Grid, User } from "@nextui-org/react";
import { useAuthContext } from "@/app/context/AuthContext";
import getUser from "@/app/firebase/firestore/getData";

export default function UserLogo() {
  const [firstName, setFirstName] = useState(null);
  const [lastName, setLastName] = useState(null);
  const { user } = useAuthContext();
  // console.log(user.firstName, "======");

  // call firebase helper fn
  const getUserInfo = async () => {
    const docSnap = await getUser("users", user.email);
    setFirstName(docSnap.firstName);
    setLastName(docSnap.lastName);
    console.log(docSnap);
  };

  useEffect(() => {
    // get user data once on page load
    getUserInfo();
  }, []);

  return (
    <Grid.Container>
      <Grid>
        <Dropdown placement="bottom-left">
          <Dropdown.Trigger>
            <User
              bordered
              as="button"
              size="lg"
              color="primary"
              name={`${firstName} ${lastName}`}
              description={user.email}
              src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
            />
          </Dropdown.Trigger>
          <Dropdown.Menu color="primary" aria-label="User Actions">
            <Dropdown.Item key="profile" css={{ height: "$18" }}>
              <Text b color="inherit" css={{ d: "flex" }}>
                Signed in as
              </Text>
              <Text b color="inherit" css={{ d: "flex" }}>
                {user.email}
              </Text>
            </Dropdown.Item>
            <Dropdown.Item key="settings" withDivider>
              My Settings
            </Dropdown.Item>
            <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
            <Dropdown.Item key="analytics" withDivider>
              Analytics
            </Dropdown.Item>
            <Dropdown.Item key="system">System</Dropdown.Item>
            <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
            <Dropdown.Item key="help_and_feedback" withDivider>
              Help & Feedback
            </Dropdown.Item>
            <Dropdown.Item key="logout" color="error" withDivider>
              Log Out
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </Grid>
    </Grid.Container>
  );
}
