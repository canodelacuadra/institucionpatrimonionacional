// src/components/__tests__/UserCard.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "../src/components/usercard";

test("muestra el nombre y la edad correctos", () => {
    render(<UserCard name="John Doe" age={30} isOnline={true} />);
    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("Age: 30")).toBeInTheDocument();
});

test("muestra 'Online' cuando isOnline es true", () => {
    render(<UserCard name="Jane Doe" age={25} isOnline={true} />);
    expect(screen.getByText("Online")).toBeInTheDocument();
});

test("muestra 'Offline' cuando isOnline es false", () => {
    render(<UserCard name="Jane Doe" age={25} isOnline={false} />);
    expect(screen.getByText("Offline")).toBeInTheDocument();
});

test("selecciona elementos por rol y verifica su contenido", () => {
    render(<UserCard name="Alice" age={28} isOnline={true} />);
    const heading = screen.getByRole("heading", { name: /Alice/i });
    expect(heading).toHaveTextContent("Alice");

    const ageParagraph = screen.getByText(/Age: 28/i);
    expect(ageParagraph).toBeInTheDocument();
});