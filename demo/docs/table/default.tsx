import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const Demo = () => {
    return (
        <Table>
            <TableCaption>A list of your recent tasks</TableCaption>
            <TableHeader>
                <TableRow>
                    <TableHead className="w-[100px]">ID</TableHead>
                    <TableHead>Project Name</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead className="text-right">Deadline</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                <TableRow>
                    <TableCell className="font-medium">PROJ001</TableCell>
                    <TableCell>Website Redesign</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell className="text-right">2024-10-01</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">PROJ002</TableCell>
                    <TableCell>Mobile App</TableCell>
                    <TableCell>In Progress</TableCell>
                    <TableCell className="text-right">2024-12-15</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">PROJ003</TableCell>
                    <TableCell>Marketing Campaign</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell className="text-right">2025-01-10</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">PROJ004</TableCell>
                    <TableCell>Product Launch</TableCell>
                    <TableCell>In Progress</TableCell>
                    <TableCell className="text-right">2025-03-01</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">PROJ005</TableCell>
                    <TableCell>UI/UX Improvements</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell className="text-right">2024-09-15</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">PROJ006</TableCell>
                    <TableCell>Data Migration</TableCell>
                    <TableCell>In Progress</TableCell>
                    <TableCell className="text-right">2024-11-30</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">PROJ007</TableCell>
                    <TableCell>CRM Integration</TableCell>
                    <TableCell>Completed</TableCell>
                    <TableCell className="text-right">2024-08-25</TableCell>
                </TableRow>
                <TableRow>
                    <TableCell className="font-medium">PROJ008</TableCell>
                    <TableCell>Security Audit</TableCell>
                    <TableCell>Pending</TableCell>
                    <TableCell className="text-right">2025-02-20</TableCell>
                </TableRow>
            </TableBody>
        </Table>
    );
};
