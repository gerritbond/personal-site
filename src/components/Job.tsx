export type JobDetails = {
  title: string;
  company: string;
  location: string;
  startDate: Date;
  endDate: Date | undefined;
  description: string | undefined;
}

export const Job = (details: JobDetails) => {
  return (
    <div className="grid grid-cols-5 my-3">
        <div className="col-span-5 text-lg">{details.title}</div>
        <span className="text-sm col-span-1">{details.company}</span>
        <span className="text-sm col-span-1">{details.location}</span>
        <span className="text-sm text-left col-span-3">{details.startDate.toLocaleDateString()} - {details.endDate?.toLocaleDateString() ?? "Present"}</span>
        {details.description ? <div className="col-span-5 text-sm mb-1">{details.description}</div> : null}
    </div>
  );
};
