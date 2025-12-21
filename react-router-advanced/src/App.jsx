import ProtectedRoute from "./components/ProtectedRoute";

<Route
  path="/profile/*"
  element={
    <ProtectedRoute>
      <Profile />
    </ProtectedRoute>
  }
/>
