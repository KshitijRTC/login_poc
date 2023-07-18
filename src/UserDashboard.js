import { useDispatch, useSelector } from "react-redux";
import React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";
import { Button, capitalize } from "@mui/material";
import * as actions from "./redux/actionType"

function UserDashboard() {
  const user = useSelector((state) => state?.login?.data);
  const dispatch = useDispatch();

  return (
    <div>
      {user !== null ? (
        <div style={{ display: "flex", gap: "10px", flexDirection: "column" }}>
          <h3>Profile</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              border: "1px solid rgb(238,238,238)",
              borderRadius: "10px",
            }}
          >
            <div style={{ width: "150px" }}>
              <Avatar
                sx={{ width: 100, height: 100 }}
                src={user?.picture?.large}
              />
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ textTransform: "capitalize" }}>
                {user?.name?.first} {user?.name?.last}
              </h3>
              <p>{user?.gender}</p>
              <p>{user?.location?.city}</p>
            </div>
          </div>
          <div
            style={{
              border: "1px solid rgb(238,238,238)",
              borderRadius: "10px",
            }}
          >
            <div>
              <h4>Personal Information</h4>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr 1fr",
              }}
            >
              <div>
                <p>First Name</p>
                <p>{user?.name?.first}</p>
              </div>
              <div>
                <p>Last Name</p>
                <p>{user?.name?.last}</p>
              </div>
              <div>
                <p>Email</p>
                <p>{user?.email}</p>
              </div>
              <div>
                <p>Phone</p>
                <p>{user?.phone}</p>
              </div>
              <div>
                <p>Nationality</p>
                <p>{user?.nat}</p>
              </div>
            </div>
          </div>
          <div
            style={{
              border: "1px solid rgb(238,238,238)",
              borderRadius: "10px",
            }}
          >
            <div>
              <h4>Address</h4>
            </div>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
              }}
            >
              <div>
                <p>Street</p>
                <p>{user?.location?.street}</p>
              </div>
              <div>
                <p>City/State</p>
                <p>{user?.location?.city}, {user?.location?.state}</p>
              </div>
              <div>
                <p>Postal Code</p>
                <p>{user?.location?.postcode}</p>
              </div>
              <div>
                <p>Country</p>
                <p>{user?.nat}</p>
              </div>
              
            </div>
          </div>
          <Link to={"/"}>Logout</Link>
        </div>
      ) : (
        <div>
          <h1>Error!!!! User not found</h1>
          <Link to={"/"}>Try Again</Link>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
