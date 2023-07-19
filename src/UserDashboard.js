import { useDispatch, useSelector } from "react-redux";
import React from "react";
import Avatar from "@mui/material/Avatar";
import { Link } from "react-router-dom";
import * as actions from "./redux/actionType";
import {
  Dashboard,
  DashboardContainer,
  ErrorContainer,
  InfoContainer,
  InfoContent,
  InfoEntry,
  InfoHeading,
  LogoutBtn,
  NameContainer,
  ProfileContainer,
  TryagainBtn,
} from "./Styled/Styles";

function UserDashboard() {
  const user = useSelector((state) => state?.login?.data);
  const dispatch = useDispatch();

  return (
    <DashboardContainer>
      {user !== null ? (
        <Dashboard>
          <h3>Profile</h3>
          <ProfileContainer>
            <Avatar
              sx={{ width: 100, height: 100 }}
              src={user?.picture?.large}
            />
            <NameContainer>
              <span style={{ fontSize: "20px", fontWeight: "700" }}>
                {user?.name?.first} {user?.name?.last}
              </span>
              <span style={{ color: "grey", fontSize: "14px" }}>
                {user?.gender}
              </span>
              <span style={{ color: "grey", fontSize: "14px" }}>
                {user?.location?.city}, {user?.location?.state}
              </span>
            </NameContainer>
          </ProfileContainer>
          <InfoContainer>
            <InfoHeading>
              <h4>Personal Information</h4>
            </InfoHeading>
            <InfoContent>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>
                  First Name
                </span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.name?.first}
                </p>
              </InfoEntry>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>
                  Last Name
                </span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.name?.last}
                </p>
              </InfoEntry>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>Email</span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.email}
                </p>
              </InfoEntry>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>Phone</span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.phone}
                </p>
              </InfoEntry>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>
                  Nationality
                </span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.nat}
                </p>
              </InfoEntry>
            </InfoContent>
          </InfoContainer>
          <InfoContainer>
            <InfoHeading>
              <h4>Address</h4>
            </InfoHeading>
            <InfoContent>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>Street</span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.location?.street}
                </p>
              </InfoEntry>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>
                  City/State
                </span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.location?.city}, {user?.location?.state}
                </p>
              </InfoEntry>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>
                  Postal Code
                </span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.location?.postcode}
                </p>
              </InfoEntry>
              <InfoEntry>
                <span style={{ fontSize: "13px", color: "grey" }}>Country</span>
                <p style={{ fontSize: "17px", fontWeight: "bold" }}>
                  {user?.nat}
                </p>
              </InfoEntry>
            </InfoContent>
          </InfoContainer>
          <LogoutBtn
            to={"/"}
            onClick={() => {
              dispatch({
                type: actions.LOGOUT,
                payload: {
                  data: null,
                },
              });
            }}
          >
            Logout
          </LogoutBtn>
        </Dashboard>
      ) : (
        <ErrorContainer>
          <h1>Error!!!! User not found</h1>
          <TryagainBtn to={"/"}>Try Again</TryagainBtn>
        </ErrorContainer>
      )}
    </DashboardContainer>
  );
}

export default UserDashboard;
