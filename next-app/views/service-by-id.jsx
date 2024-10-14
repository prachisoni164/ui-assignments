import { useContext } from "react"
import { PostContext } from "../context/post-context"
import { ServiceContext } from "../context/service-context";

const ServiceById = (id) => {

    const services = useContext(ServiceContext);

    const serviceId = id.id;

    const service = services.find((service) => service.id === parseInt(serviceId));

    return (
        <div className="container">
            <div>
                {service ? (
                    <>
                        <h1>{service.title}</h1>
                        <p>{service.content}</p>
                    </>
                ) : (
                    <p>Service not found.</p>
                )}
            </div>
    </div>
)};

export default ServiceById