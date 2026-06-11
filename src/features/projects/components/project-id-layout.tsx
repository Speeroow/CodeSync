"use client"

import { Allotment } from "allotment";

import { Id } from "../../../../convex/_generated/dataModel";
import { Navbar } from "./navbar";

import "allotment/dist/style.css"

const MIN_SIDERBAR_WIDTH = 200;
const MAX_SIDERBAR_WIDTH = 800;
const DEFAULT_CONVERSATION_SIDERBAR_WIDTH = 400;
const DEFAULT_MAIN_SIZE = 1000;

export const ProjectIdLayout = ({
    children,
    projectId
}: {
    children: React.ReactNode;
    projectId: Id<"projects">
}) => {
    return (
        <div className="w-full h-screen flex flex-col">
            <Navbar projectId={projectId} />
            <div className="flex-1 flex overflow-hidden">
                <Allotment
                    className="flex-1"
                    defaultSizes={[DEFAULT_CONVERSATION_SIDERBAR_WIDTH, DEFAULT_MAIN_SIZE]}
                >
                    <Allotment.Pane
                        snap
                        minSize={MIN_SIDERBAR_WIDTH}
                        maxSize={MAX_SIDERBAR_WIDTH}
                        preferredSize={DEFAULT_CONVERSATION_SIDERBAR_WIDTH}
                    >
                        <div>Conversation Siderbar</div>
                    </Allotment.Pane>
                    <Allotment.Pane>
                        {children}
                    </Allotment.Pane>
                </Allotment>
            </div>
        </div>
    )
}