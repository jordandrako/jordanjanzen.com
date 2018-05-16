import * as React from 'react';
import { IObserverProps } from './Observer.types';

interface IObserverState {
  hasBeenVisible: boolean;
  isVisible: boolean;
}

class Observer extends React.Component<IObserverProps, IObserverState> {
  private _io: IntersectionObserver | null;
  private _container: React.RefObject<HTMLDivElement>;

  public constructor(props: IObserverProps) {
    super(props);

    this._io = null;
    this._container = React.createRef<HTMLDivElement>();

    this.state = {
      hasBeenVisible: false,
      isVisible: false,
    };
  }

  public componentDidMount(): void {
    this._io = new IntersectionObserver(([entry]) => {
      this.setState({ isVisible: entry.isIntersecting });
      if (this.state.isVisible) {
        this.setState({ hasBeenVisible: true });
      }
    }, {});
    this._io.observe(this._container.current as Element);
  }

  public componentWillUnmount(): void {
    if (this._io) {
      this._io.disconnect();
    }
  }

  public componentWillReceiveNewProps(newProps: IObserverProps): void {
    if (!this.state.hasBeenVisible && newProps.isVisible) {
      this.setState({ hasBeenVisible: true });
    }
  }

  public render(): JSX.Element {
    return (
      // we create a div to get a reference.
      // It's possible to use findDOMNode() to avoid
      // creating extra elements, but findDOMNode is discouraged
      <div ref={this._container}>
        {Array.isArray(this.props.children)
          ? this.props.children.map(child =>
              child(this.state.isVisible, this.state.hasBeenVisible)
            )
          : this.props.children(
              this.state.isVisible,
              this.state.hasBeenVisible
            )}
      </div>
    );
  }
}

export default Observer;
