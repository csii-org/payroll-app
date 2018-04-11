import Dashboard from 'containers/Dashboard';
import PayrollRun from 'containers/Payroll/PayrollRun';
import PayrollApproval from 'containers/Payroll/PayrollApproval';
import PayrollHistory from 'containers/Payroll/PayrollHistory';
import LeaveApplication from 'containers/Leave/LeaveApplication';
import LeaveApproval from 'containers/Leave/LeaveApproval';
import LeaveHistory from 'containers/Leave/LeaveHistory';

const dashRoutes = [
    { path: "/dashboard", name: "Dashboard", icon: "design_app", component: Dashboard },
    { collapse: true, path: "/payroll", name: "Payroll", state: "openPayroll", icon: "business_money-coins", views:
        [{ path: "/payroll/run", name: "Payroll Run", mini: "PR", component: PayrollRun },
        { path: "/payroll/approval", name: "Payroll Approval", mini: "PA", component: PayrollApproval },
        { path: "/payroll/history", name: "Payroll History", mini: "PH", component: PayrollHistory }]
    },
    { collapse: true, path: "/leave", name: "Leave", state: "openLeave", icon: "transportation_bus-front-12", views:
        [{ path: "/leave/application", name: "Leave Application", mini: "LA", component: LeaveApplication },
        { path: "/leave/approval", name: "Leave Approval", mini: "LA", component: LeaveApproval },
        { path: "/leave/history", name: "Leave History", mini: "LH", component: LeaveHistory }]
    },
];
export default dashRoutes;
