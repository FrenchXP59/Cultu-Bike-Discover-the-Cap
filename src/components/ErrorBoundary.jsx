import React from "react";

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(/*error*/) {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("🚨 ErrorBoundary caught:", error, info);
  }
  render() {
    if (this.state.hasError) {
      // affichage de secours
      return (
        <div style={{ padding: 20, textAlign: "center" }}>
          <h2>Oups, quelque chose a planté sur la carte.</h2>
          <button onClick={() => this.setState({ hasError: false })}>
            Réessayer
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}