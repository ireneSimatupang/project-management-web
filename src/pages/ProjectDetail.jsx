import { useParams } from "react-router-dom";
import useProjectStore from "../stores/projectStore";
import { useEffect } from "react";

export default function ProjectDetail() {
    const { projectId } = useParams();
    const { projectDetail, fetchProjectDetail, loading, error } = useProjectStore();

    console.log({ projectDetail, loading, error });

    useEffect(() => {
        if (projectId) {
            fetchProjectDetail(projectId);
        }
    }, []);

    if (loading) return <div className="p-6">Loading Project...</div>;
    if (error) return <div className="p-6 text-red-500">Error: {error}</div>;
    if (!projectDetail) return <div className="p-6">No Project Found.</div>;

    return (
        <div className="p-6 bg-white rounded shadow space-y-8">
            <div>
                <h1 className="text-2xl font-bold mb-4">{projectDetail.name}</h1>

                <div className="text-gray-600 mb-2">
                    <strong>Status: </strong>{projectDetail.status}
                </div>

                <div className="text-gray-600 mb-2">
                    <strong>Duration: </strong>
                    {projectDetail.startDate && new Date(projectDetail.startDate).toLocaleDateString()} -{" "}
                    {projectDetail.endDate && new Date(projectDetail.endDate).toLocaleDateString()}
                </div>

                <div className="text-gray-600 mb-2">
                    <strong>Description: </strong>{projectDetail.description}
                </div>

                <div className="text-gray-600 mb-2">
                    <strong>Created by: </strong>{projectDetail?.createdBy?.name || "Unknown"} 
                </div>
            </div>
        </div>
    );
}