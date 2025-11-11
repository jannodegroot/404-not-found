/**
 * Adds an message to current error pane.
 * @param id Identifier for the message. Must be unique.
 * @param content Text content of the message
 * @param type severity of the message
 */
export declare function add(id: string, content: string, type: MessageType): void;
/**
 * Removes an message from current error pane.
 * @param id Identifier for the message. Must be unique.
 */
export declare function remove(id: string): void;
export interface Message {
    identifier: string;
    type: MessageType;
    content: string;
}
export declare enum MessageType {
    Message = 0,
    Error = 1,
    Warning = 2,
    Information = 3
}
declare const _add: typeof add;
declare const _remove: typeof remove;
declare const _MessageType: typeof MessageType;
type tMessage = Message;
type tMessageType = MessageType;
declare global {
    namespace TcHmi.Engineering {
        /**
         * Provides resources for interaction with the Visual Studio error pane.
         * @preserve (Part of the public API)
         */
        namespace ErrorPane {
            const add: typeof _add;
            const remove: typeof _remove;
            const MessageType: typeof _MessageType;
            type Message = tMessage;
            type MessageType = tMessageType;
        }
    }
}
export {};
//# sourceMappingURL=Engineering.ErrorPane.d.ts.map