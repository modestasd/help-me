import React,{Component, ErrorInfo} from 'react';

interface IProps {
}

interface IState {
    error: Error,
    errorInfo: ErrorInfo
}

class ErrorBoundary extends Component<IProps, IState> {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            errorInfo: null,
        };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      this.setState({error, errorInfo});
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.error) {
        // You can render any custom fallback UI
        return <h1>Something went wrong. Please <button onClick={()=> location.reload()}>Realod</button> the page</h1>;
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;