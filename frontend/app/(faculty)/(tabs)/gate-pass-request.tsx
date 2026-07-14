import GatePassRequestComponent from '../../../components/GatePass/GatePassRequest';
import { useAuth } from '../../../context/AuthContext';

export default function GatePassRequestScreen() {
  const { apiBaseUrl, session } = useAuth();

  return (
    <GatePassRequestComponent
      apiBaseUrl={apiBaseUrl}
      token={session?.token}
      teacherId={session?.user.erpId}
      teacherName={session?.user.name}
    />
  );
}
