import React, {ChangeEvent} from "react";

type MapStatePropsType = {
    status: string
}
type MapDispatchPropsType = {
    updateStatusUser: (status: string) => void
}
export type OwnPropsType = MapStatePropsType & MapDispatchPropsType

export class ProfileStatus extends React.Component<OwnPropsType, any> {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })
        this.props.updateStatusUser(this.state.status)
    }

    onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    componentDidUpdate(prevProps: Readonly<OwnPropsType>, prevState: Readonly<any>, snapshot?: any): void {
         if (prevProps.status !== this.props.status) {
             this.setState({
                 status: this.props.status
             })
         }
    }

    render(): React.ReactNode {
        return (
            <div>
                {this.state.editMode ?
                    <div>
                        <input
                            autoFocus={true}
                            onBlur={this.deactivateEditMode}
                            value={this.state.status}
                            onChange={this.onStatusChange}
                        />
                    </div>
                    :
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</span>
                    </div>
                }
            </div>
        )
    }
}