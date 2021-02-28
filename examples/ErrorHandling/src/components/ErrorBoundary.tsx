import React,{Component, ErrorInfo, ReactNode} from 'react';

interface IErrorBoundaryProps {
    children: ReactNode;
  }
  

interface IErrorBoundaryState {
    error: Error | null;
    errorInfo: ErrorInfo | null;
}

class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
    public state: IErrorBoundaryState = {
        error: null,
        errorInfo: null,
    };

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
      this.setState({error, errorInfo});
      console.log(error, errorInfo);
    }
  
    render() {
      if (this.state.error) {
        // You can render any custom fallback UI
        return(
            <>
                <h1>Something went wrong. Please <button onClick={()=> location.reload()}>Realod</button> the page</h1>
                <p>{this.state.error.message}</p>
            </>
        );
      }
  
      return this.props.children; 
    }
}

export default ErrorBoundary;