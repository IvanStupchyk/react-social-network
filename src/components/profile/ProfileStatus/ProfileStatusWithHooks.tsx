import React, {ChangeEvent, useEffect, useState} from "react";

type ProfileStatusWithHooksType = {
    status: string
    updateStatusUser: (status: string) => void
}

export const ProfileStatusWithHooks = (props: ProfileStatusWithHooksType) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)

    useEffect(() => {
        setStatus(props.status)
    },[props.status])

    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatusUser(status)
    }
    const activateEditMode = () => {
        setEditMode(true)
    }

    return (
        <div>
            {editMode ?
                <div>
                    <input
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status}
                        onChange={onStatusChange}
                    />
                </div>
                :

                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '----'}</span>
                </div>
            }

        </div>
    )
}